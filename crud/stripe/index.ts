import fs from 'fs'
import path from 'path'

const goDeeper = (current, links, id, field, multiple = false)=> {
    switch(current.kind) {
      case "OBJECT": case "ENUM": {
        links.push({source: id, target: current.name, field, multiple })
        return {
          kind: current.kind,
          ref: current.name,
          multiple
        }
      }
      case "LIST": {
        return goDeeper(current.ofType, links, id, field, true)
      }
      case "NON_NULL": {
        return goDeeper(current.ofType, links, id, field,)
      }
      default: {
        return {
          kind: current.kind,
          multiple,
          name: current.name
        }
      }
    }
}

const handler = async (event, context, callback) => {
  const generatedFiles = await generate(
    {
      schema: './spotify.graphql',
      generates: {
        "introspection.json": {
          plugins: ['introspection']
        }
      }
    },
    true
  )
  const introspectionSchema = JSON.parse(generatedFiles[0].content)
  const {types} = introspectionSchema.__schema
  const links = []
  const filteredTypes = types
  .filter(({kind, name})=>name !== "Query" && !name.includes("__") && ["OBJECT", "ENUM"].includes(kind))
  .map(({fields, name})=>({
    fields: fields ? fields.map(({type, name: fieldName, description})=>({type: goDeeper(type, links, name, fieldName), name: fieldName, description})) : undefined,
    id: name
  }))
  fs.writeFile("./types.json", JSON.stringify({
    nodes: filteredTypes,
    links
  }), (res)=> console.log(res)); 
  // for (const gType of types) {
  //   switch(gType.kind) {
  //     case "OBJECT": {

  //     } break;
  //     case "INPUT_OBJECT": {

  //     } break;
  //   }
  // }
  return {
    functions: [],
    resources: []
  }
};
// openapi-to-graphql --no-viewer --simpleNames --save ./test.graphql ./test/stripe.yaml
handler({})
exports.handler = handler