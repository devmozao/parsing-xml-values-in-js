'use strict'

var fs = require('fs')
var parser = require('xml2json')

const document = fs.readFile('./file.xml', (error, data) => {
  return JSON.parse(parser.toJson(data, { reversible: true }))
})

console.dir('file', document)
