import * as types from '../constants/actionTypes';
// import {Xsd2JsonSchema} from 'xsd2jsonschema';


export function fetchXmlSchemaModel() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.FETCH_XML_SCHEMA_MODEL,
      schemaModel: {a: "aa", b: "bb"}
    });
  };
}


// function createSchemaModel() {
//   const XML_SCHEMA = `
//     <?xml version="1.0" encoding="UTF-8"?>
//     <xs:schema  xmlns:xs="http://www.w3.org/2001/XMLSchema">
//       <xs:simpleType name="C">
//         <xs:restriction base="xs:string">
//           <xs:minLength value="1"/>
//         </xs:restriction>
//       </xs:simpleType>
//       <xs:simpleType name="Char_20">
//         <xs:restriction base="C">
//           <xs:minLength value="1"/>
//           <xs:maxLength value="20"/>
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:schema>
//     `;
//
//   const xs2js = new Xsd2JsonSchema();
//   const convertedSchemas = xs2js.processAllSchemas({
//     schemas: {'hello_world.xsd': XML_SCHEMA}
//   });
//   const jsonSchema = convertedSchemas['hello_world.xsd'].getJsonSchema();
//   return jsonSchema;
// }


