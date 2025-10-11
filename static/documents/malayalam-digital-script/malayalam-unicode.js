
class MalayalamUnicodeExplorer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.MALAYALAM_START = 0x0D00;
        this.MALAYALAM_END = 0x0D7F;
        this.selectedChar = null;
        
        this.categoryNames = {
            'Lo': 'Letter, Other',
            'Mn': 'Mark, Nonspacing',
            'Mc': 'Mark, Spacing Combining',
            'Nd': 'Number, Decimal Digit',
            'Po': 'Punctuation, Other',
            'So': 'Symbol, Other'
        };
    }

    connectedCallback() {
        this.render();
        this.charGrid = this.shadowRoot.getElementById('charGrid');
        this.detailsPanel = this.shadowRoot.getElementById('detailsPanel');
        this.renderCharacterGrid();
    }

    render() {
        const styles = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                :host {
                    display: block;
                    font-family: Malini,Manjari, sans-serif;
                    padding: 20px;
                }

                .container {
                    max-width: 1400px;
                    margin: 0 auto;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    overflow: hidden;
                }

                .header {
                    padding: 24px;
                }

                .header h1 {
                    font-size: 28px;
                    margin-bottom: 8px;
                }

                .header p {
                    opacity: 0.9;
                    font-size: 14px;
                }

                .content {
                    display: grid;
                    grid-template-columns: 1fr 400px;
                    gap: 0;
                    min-height: 600px;
                }

                .char-grid {
                    padding: 8px;
                    overflow-y: auto;
                        scrollbar-width: thin;
                    max-height: 70vh;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
                    gap: 4px;
                }

                .char-cell {
                    aspect-ratio: 1;
                    border: 1px solid #e0e0e0;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    cursor: pointer;
                    transition: all 0.2s;

                }

                .char-cell:hover {
                    border-color: AccentColor;
                }

                .char-cell.selected {
                    background: AccentColor;
                }

                .details-panel {
                    border-left: 2px solid #e0e0e0;
                    padding: 8px;
                    overflow-y: auto;
                        scrollbar-width: thin;
                    max-height: 70vh;
                }

                .details-panel.empty {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #999;
                    font-style: italic;
                }

                .char-display {
                    text-align: center;
                    padding: 30px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .char-display .big-char {
                    font-size: 120px;
                    line-height: 1;
                    margin-bottom: 10px;
               }

                .char-display .char-name {
                    font-size: 14px;
                    font-weight: 500;
                }

                .info-section {

                    border-radius: 8px;
                    padding: 16px;
                    margin-bottom: 12px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .info-section h3 {
                    font-size: 14px;
                    margin-bottom: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .info-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 8px 0;
                    border-bottom: 1px solid #f0f0f0;
                }

                .info-row:last-child {
                    border-bottom: none;
                }

                .info-label {
                    font-weight: 500;
                
                    font-size: 13px;
                }

                .info-value {
                  
                    font-size: 13px;
                }

        

                

                @media (max-width: 968px) {
                    .content {
                        grid-template-columns: 1fr;
                    }

                    .details-panel {
                        border-left: none;
                        border-top: 2px solid #e0e0e0;
                        max-height: 400px;
                    }
                }
            </style>
        `;

        const template = `
            ${styles}
            <div class="container">
                <div class="header">
                    <h1>Malayalam Unicode Character Viewer</h1>
                    <p>Unicode Range: U+0D00 to U+0D7F (128 characters) • Click on any character to view details</p>
                </div>
                <div class="content">
                    <div class="char-grid">
                         
                        <div class="grid" id="charGrid"></div>
                    </div>
                    <div class="details-panel empty" id="detailsPanel">
                        <p>Click on a character to view its details</p>
                    </div>
                </div>
            </div>
        `;

        this.shadowRoot.innerHTML = template;
    }

    renderCharacterGrid() {
        for (let code = this.MALAYALAM_START; code <= this.MALAYALAM_END; code++) {
            const char = String.fromCodePoint(code);
            const cell = document.createElement('div');
            cell.className = 'char-cell';
            cell.textContent = char;
            cell.dataset.code = code;
            
            cell.addEventListener('click', () => this.selectCharacter(code, cell));
            
            this.charGrid.appendChild(cell);
        }
    }

    selectCharacter(code, cell) {
        const prevSelected = this.charGrid.querySelector('.selected');
        if (prevSelected) {
            prevSelected.classList.remove('selected');
        }
        
        cell.classList.add('selected');
        this.selectedChar = code;
        
        this.showDetails(code);
    }

    showDetails(code) {
        const char = String.fromCodePoint(code);
        const charName = this.getCharacterName(code);
        const category = this.getGeneralCategory(code);
        
        this.detailsPanel.classList.remove('empty');
        this.detailsPanel.innerHTML = `
            <div class="char-display">
                <div class="big-char">${char}</div>
                <div class="char-name">${charName}</div>
            </div>

            <div class="info-section">
                <h3>Basic Information</h3>
                <div class="info-row">
                    <span class="info-label">Character</span>
                    <span class="info-value">${char}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Name</span>
                    <span class="info-value">${charName}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Category</span>
                    <span class="info-value">${this.categoryNames[category] || category}</span>
                </div>
            </div>

            <div class="info-section">
                <h3>Code Points</h3>
                <div class="info-row">
                    <span class="info-label">Decimal</span>
                    <span class="info-value">${code}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Hexadecimal</span>
                    <span class="info-value">0x${code.toString(16).toUpperCase().padStart(4, '0')}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Unicode</span>
                    <span class="info-value">U+${code.toString(16).toUpperCase().padStart(4, '0')}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">UTF-8</span>
                    <span class="info-value">${this.getUTF8Encoding(code)}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">UTF-16</span>
                    <span class="info-value">${this.getUTF16Encoding(code)}</span>
                </div>
            </div>

            <div class="info-section">
                <h3>HTML/CSS Representations</h3>
                <div class="info-row">
                    <span class="info-label">HTML Entity</span>
                    <span class="info-value">&amp;#${code};</span>
                </div>
                <div class="info-row">
                    <span class="info-label">HTML Hex Entity</span>
                    <span class="info-value">&amp;#x${code.toString(16).toUpperCase()};</span>
                </div>
                <div class="info-row">
                    <span class="info-label">CSS Code</span>
                    <span class="info-value">\\${code.toString(16).toUpperCase().padStart(4, '0')}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">JavaScript</span>
                    <span class="info-value">\\u{${code.toString(16).toUpperCase()}}</span>
                </div>
            </div>
 
        `;

       
    }

    getCharacterName(code) {
        const names = {
            0x0D00: 'MALAYALAM SIGN COMBINING ANUSVARA ABOVE',
            0x0D01: 'MALAYALAM SIGN CANDRABINDU',
            0x0D02: 'MALAYALAM SIGN ANUSVARA',
            0x0D03: 'MALAYALAM SIGN VISARGA',
            0x0D04: 'MALAYALAM LETTER VEDIC ANUSVARA',
            0x0D05: 'MALAYALAM LETTER A',
            0x0D06: 'MALAYALAM LETTER AA',
            0x0D07: 'MALAYALAM LETTER I',
            0x0D08: 'MALAYALAM LETTER II',
            0x0D09: 'MALAYALAM LETTER U',
            0x0D0A: 'MALAYALAM LETTER UU',
            0x0D0B: 'MALAYALAM LETTER VOCALIC R',
            0x0D0C: 'MALAYALAM LETTER VOCALIC L',
            0x0D0E: 'MALAYALAM LETTER E',
            0x0D0F: 'MALAYALAM LETTER EE',
            0x0D10: 'MALAYALAM LETTER AI',
            0x0D12: 'MALAYALAM LETTER O',
            0x0D13: 'MALAYALAM LETTER OO',
            0x0D14: 'MALAYALAM LETTER AU',
            0x0D15: 'MALAYALAM LETTER KA',
            0x0D16: 'MALAYALAM LETTER KHA',
            0x0D17: 'MALAYALAM LETTER GA',
            0x0D18: 'MALAYALAM LETTER GHA',
            0x0D19: 'MALAYALAM LETTER NGA',
            0x0D1A: 'MALAYALAM LETTER CA',
            0x0D1B: 'MALAYALAM LETTER CHA',
            0x0D1C: 'MALAYALAM LETTER JA',
            0x0D1D: 'MALAYALAM LETTER JHA',
            0x0D1E: 'MALAYALAM LETTER NYA',
            0x0D1F: 'MALAYALAM LETTER TTA',
            0x0D20: 'MALAYALAM LETTER TTHA',
            0x0D21: 'MALAYALAM LETTER DDA',
            0x0D22: 'MALAYALAM LETTER DDHA',
            0x0D23: 'MALAYALAM LETTER NNA',
            0x0D24: 'MALAYALAM LETTER TA',
            0x0D25: 'MALAYALAM LETTER THA',
            0x0D26: 'MALAYALAM LETTER DA',
            0x0D27: 'MALAYALAM LETTER DHA',
            0x0D28: 'MALAYALAM LETTER NA',
            0x0D2A: 'MALAYALAM LETTER PA',
            0x0D2B: 'MALAYALAM LETTER PHA',
            0x0D2C: 'MALAYALAM LETTER BA',
            0x0D2D: 'MALAYALAM LETTER BHA',
            0x0D2E: 'MALAYALAM LETTER MA',
            0x0D2F: 'MALAYALAM LETTER YA',
            0x0D30: 'MALAYALAM LETTER RA',
            0x0D31: 'MALAYALAM LETTER RRA',
            0x0D32: 'MALAYALAM LETTER LA',
            0x0D33: 'MALAYALAM LETTER LLA',
            0x0D34: 'MALAYALAM LETTER LLLA',
            0x0D35: 'MALAYALAM LETTER VA',
            0x0D36: 'MALAYALAM LETTER SHA',
            0x0D37: 'MALAYALAM LETTER SSA',
            0x0D38: 'MALAYALAM LETTER SA',
            0x0D39: 'MALAYALAM LETTER HA',
            0x0D3A: 'MALAYALAM LETTER TTTA',
            0x0D3B: 'MALAYALAM SIGN VERTICAL BAR VIRAMA',
            0x0D3C: 'MALAYALAM SIGN CIRCULAR VIRAMA',
            0x0D3D: 'MALAYALAM SIGN AVAGRAHA',
            0x0D3E: 'MALAYALAM VOWEL SIGN AA',
            0x0D3F: 'MALAYALAM VOWEL SIGN I',
            0x0D40: 'MALAYALAM VOWEL SIGN II',
            0x0D41: 'MALAYALAM VOWEL SIGN U',
            0x0D42: 'MALAYALAM VOWEL SIGN UU',
            0x0D43: 'MALAYALAM VOWEL SIGN VOCALIC R',
            0x0D44: 'MALAYALAM VOWEL SIGN VOCALIC RR',
            0x0D46: 'MALAYALAM VOWEL SIGN E',
            0x0D47: 'MALAYALAM VOWEL SIGN EE',
            0x0D48: 'MALAYALAM VOWEL SIGN AI',
            0x0D4A: 'MALAYALAM VOWEL SIGN O',
            0x0D4B: 'MALAYALAM VOWEL SIGN OO',
            0x0D4C: 'MALAYALAM VOWEL SIGN AU',
            0x0D4D: 'MALAYALAM SIGN VIRAMA',
            0x0D4E: 'MALAYALAM LETTER DOT REPH',
            0x0D4F: 'MALAYALAM SIGN PARA',
            0x0D54: 'MALAYALAM LETTER CHILLU M',
            0x0D55: 'MALAYALAM LETTER CHILLU Y',
            0x0D56: 'MALAYALAM LETTER CHILLU LLL',
            0x0D57: 'MALAYALAM AU LENGTH MARK',
            0x0D58: 'MALAYALAM FRACTION ONE ONE-HUNDRED-AND-SIXTIETH',
            0x0D59: 'MALAYALAM FRACTION ONE FORTIETH',
            0x0D5A: 'MALAYALAM FRACTION THREE EIGHTIETHS',
            0x0D5B: 'MALAYALAM FRACTION ONE TWENTIETH',
            0x0D5C: 'MALAYALAM FRACTION ONE TENTH',
            0x0D5D: 'MALAYALAM FRACTION THREE TWENTIETHS',
            0x0D5E: 'MALAYALAM FRACTION ONE FIFTH',
            0x0D5F: 'MALAYALAM LETTER ARCHAIC II',
            0x0D60: 'MALAYALAM LETTER VOCALIC RR',
            0x0D61: 'MALAYALAM LETTER VOCALIC LL',
            0x0D62: 'MALAYALAM VOWEL SIGN VOCALIC L',
            0x0D63: 'MALAYALAM VOWEL SIGN VOCALIC LL',
            0x0D66: 'MALAYALAM DIGIT ZERO',
            0x0D67: 'MALAYALAM DIGIT ONE',
            0x0D68: 'MALAYALAM DIGIT TWO',
            0x0D69: 'MALAYALAM DIGIT THREE',
            0x0D6A: 'MALAYALAM DIGIT FOUR',
            0x0D6B: 'MALAYALAM DIGIT FIVE',
            0x0D6C: 'MALAYALAM DIGIT SIX',
            0x0D6D: 'MALAYALAM DIGIT SEVEN',
            0x0D6E: 'MALAYALAM DIGIT EIGHT',
            0x0D6F: 'MALAYALAM DIGIT NINE',
            0x0D70: 'MALAYALAM NUMBER TEN',
            0x0D71: 'MALAYALAM NUMBER ONE HUNDRED',
            0x0D72: 'MALAYALAM NUMBER ONE THOUSAND',
            0x0D73: 'MALAYALAM FRACTION ONE QUARTER',
            0x0D74: 'MALAYALAM FRACTION ONE HALF',
            0x0D75: 'MALAYALAM FRACTION THREE QUARTERS',
            0x0D76: 'MALAYALAM FRACTION ONE SIXTEENTH',
            0x0D77: 'MALAYALAM FRACTION ONE EIGHTH',
            0x0D78: 'MALAYALAM FRACTION THREE SIXTEENTHS',
            0x0D79: 'MALAYALAM DATE MARK',
            0x0D7A: 'MALAYALAM LETTER CHILLU NN',
            0x0D7B: 'MALAYALAM LETTER CHILLU N',
            0x0D7C: 'MALAYALAM LETTER CHILLU RR',
            0x0D7D: 'MALAYALAM LETTER CHILLU L',
            0x0D7E: 'MALAYALAM LETTER CHILLU LL',
            0x0D7F: 'MALAYALAM LETTER CHILLU K'
        };
        
        return names[code] || `U+${code.toString(16).toUpperCase().padStart(4, '0')}`;
    }

    getGeneralCategory(code) {
        if (code >= 0x0D05 && code <= 0x0D39) return 'Lo';
        if (code >= 0x0D3E && code <= 0x0D44) return 'Mc';
        if (code >= 0x0D46 && code <= 0x0D48) return 'Mc';
        if (code >= 0x0D4A && code <= 0x0D4C) return 'Mc';
        if (code === 0x0D4D || code === 0x0D3C || code === 0x0D3B) return 'Mn';
        if (code >= 0x0D00 && code <= 0x0D03) return 'Mn';
        if (code >= 0x0D62 && code <= 0x0D63) return 'Mn';
        if (code >= 0x0D66 && code <= 0x0D6F) return 'Nd';
        if (code >= 0x0D54 && code <= 0x0D56) return 'Lo';
        if (code >= 0x0D7A && code <= 0x0D7F) return 'Lo';
        return 'Lo';
    }

    getUTF8Encoding(code) {
        const bytes = [];
        if (code <= 0x7F) {
            bytes.push(code);
        } else if (code <= 0x7FF) {
            bytes.push(0xC0 | (code >> 6));
            bytes.push(0x80 | (code & 0x3F));
        } else if (code <= 0xFFFF) {
            bytes.push(0xE0 | (code >> 12));
            bytes.push(0x80 | ((code >> 6) & 0x3F));
            bytes.push(0x80 | (code & 0x3F));
        }
        return bytes.map(b => '0x' + b.toString(16).toUpperCase().padStart(2, '0')).join(' ');
    }

    getUTF16Encoding(code) {
        if (code <= 0xFFFF) {
            return '0x' + code.toString(16).toUpperCase().padStart(4, '0');
        }
        return '0x' + code.toString(16).toUpperCase().padStart(4, '0');
    }

     
}

// Register the custom element
customElements.define('malayalam-unicode-explorer', MalayalamUnicodeExplorer);

