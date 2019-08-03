import React from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeReact from 'rehype-react'
import yaml from 'js-yaml'
import { Node, Parent, Literal } from 'unist'
import { pipe } from 'ramda'

export const parseFrontmatter = pipe(
  parseMarkdown,
  extractYaml
)

const markdownFrontmatterParser = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
function parseMarkdown(content: string) {
  return markdownFrontmatterParser.runSync(
    markdownFrontmatterParser.parse(content)
  )
}

const markdownReactProcessor = markdownFrontmatterParser()
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(rehypeReact as any, { createElement: React.createElement })
export function convertMarkdownToReact(content: string) {
  return markdownReactProcessor.processSync(content)
}

function extractYaml<P extends Node>(node: P) {
  if (!isParent(node) || node.children.length === 0) return {}
  const firstChildNode = node.children[0]
  if (!isYamlNode(firstChildNode)) return {}
  return yaml.safeLoad(firstChildNode.value)
}

function isParent(node: Node): node is Parent {
  return Array.isArray(node.children)
}

interface Yaml extends Literal {
  value: string
}

function isYamlNode(node: Node): node is Yaml {
  return node.type === 'yaml'
}
