import React, { useState } from 'react';


const ParagraphGenerator = () => {
    const [paragraph, setParagraph] = useState('');

    const generateParagraph = (wordLength, paragraphLength) => {

        const wordList = [
            'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
            'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
            'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna',
            'aliqua', 'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis',
            'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi',
            'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat'

        ];

        let generatedParagraph = '';

        for(let i = 0; i < paragraphLength; i++){
            const sentence = [];

            for(let j = 0; j< wordLength; j++){
                const wordIndex = Math.floor(Math.random() * wordList.length);
                const word = wordList[wordIndex];
                sentence.push(word);
            }

            // Capitalize the first word of each sentence

            sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].slice(1);

            generatedParagraph += sentence.join(' ') + ' ';
        }

        // Capitalize the first word of each sentence

        generatedParagraph = generatedParagraph.charAt(0).toUpperCase() + generatedParagraph.slice(1);

        return generatedParagraph;


        
    };

    const handleGenerateClick = () => {
        const newParagraph = generateParagraph(10, 5); 
        setParagraph(newParagraph);
    };

    return (
        <div>
            <button onClick={handleGenerateClick}>
              Generate Paragraph
            </button>
            <p>{paragraph}</p>
        </div>
    );
};


export default ParagraphGenerator;