const { parse } = require('path')
const rdf = require('rdf')
const { NamedNode, BlankNode } = require('rdf/lib/RDFNode')
const util = require('util')
const fs = require('fs').promises

const ISRO_PREFIX = rdf.ns('http://www.robot-arbi.kr/ontologies/isro.owl#')
const OWL_PREFIX = rdf.ns('https://www.w3.org/2002/07/owl#')
var graph = new rdf.Graph()

module.exports = {
  graph: graph,
  getSkillsFromCapability : (capabilities) => {
    
  },
  getOwlInDirectory : async (dir) => {
    let fileList = await fs.readdir(dir)
    console.log(fileList)
    await Promise.all(fileList.map(async (fileName) => {
      const file = await fs.readFile(dir + fileName)      
      if (fileName.endsWith('.ttl')) {
        const parsedTTLData = rdf.TurtleParser.parse(file);
        graph.addAll(parsedTTLData.graph)
      }
    }))

    console.log(graph)
    
  }
  

}