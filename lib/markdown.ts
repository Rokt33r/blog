import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import yaml from 'js-yaml'
import { Node, Parent, Literal } from 'unist'
import { pipe } from 'ramda'

export const parseFrontmatter = pipe(
  parseMarkdown,
  extractYaml
)

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
function parseMarkdown(content: string) {
  return markdownProcessor.runSync(markdownProcessor.parse(content))
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
