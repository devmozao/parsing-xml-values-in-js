'use strict'

const fs = require('fs')
const br = "\n" // line breaker

function parseToJSON(data) {
  return JSON.stringify(data)
}

function replacer(data) {
  return data
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&apos/g, "'")
}

// reads the file and stores in variable. we must encode to utf-8 to not get unformatted data, then log the result
const document = fs.readFileSync('./file.xml', 'utf8', (error, data) => {
  return data
})
console.log(br, 'document state after loading and encoding', br, document)

// here we first parse to JSON and then replace the values globally with regex/string substitution, then log the result
const documentParsedAndReplaced = replacer(parseToJSON(document))
console.log(br, 'result after passing to json and replacing all', br, br, documentParsedAndReplaced)

// here we directly replace the raw document with with regex/string, then log the result
const rawDocumentReplaced = replacer(document)
console.log(br, 'result after replacing the raw xml document', br, rawDocumentReplaced)
