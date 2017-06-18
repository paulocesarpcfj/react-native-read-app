import React from 'react';
import { Text } from 'react-native';
import htmlparser from 'htmlparser2-without-node-native';
import entities from 'entities';

const LINE_BREAK = '\n';
const PARAGRAPH_BREAK = '\n\n';

export default (rawHtml, styles, done) => {
    const domToElement = (dom, parent) => {
        if (!dom) return null;

        return dom.map((node, index, list) => {
            if (node.type === 'text') {
                return (
                    <Text key={index} style={parent ? styles[parent.name] : null}>
                        {entities.decodeHTML(node.data)}
                    </Text>
                );
            }

            if (node.type === 'tag') {
                let linebreakAfter = null;

                switch (node.name) {
                    case 'p':
                        if (index < list.length - 1) {
                            linebreakAfter = PARAGRAPH_BREAK;
                        }
                        break;

                    case 'br':
                        linebreakAfter = LINE_BREAK;
                        break;

                    default:
                        break;
                }

                return (
                    <Text key={index} style={{ fontSize: 16 }}>
                        {domToElement(node.children, node)}
                        {linebreakAfter}
                    </Text>
                );
            }

            return false;
        });
    };

    const domHandler = new htmlparser.DomHandler((err, dom) => {
        if (err) done(err);

        done(null, domToElement(dom));
    });

    const parser = new htmlparser.Parser(domHandler);

    parser.write(rawHtml);
    parser.done();
};
