export const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'This is a sample text in a paragraph.' }],
        style:{
            textAlign:'center'
        }
    },
    {
        type: 'heading-one',
        children: [{ text: 'This is a Heading One' }],
       
    },
    {
        type: 'bulleted-list',
        children: [
            { type: 'list-item', children: [{ text: 'First item' }] },
            { type: 'list-item', children: [{ text: 'Second item' }] },
        ],
    },
];

export const LIST_TYPES = ['numbered-list', 'bulleted-list'];