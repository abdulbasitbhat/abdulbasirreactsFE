import React from "react";
import { Quill } from "react-quill";
import './fontStyles.css'
import ColorPickerQuill from "./ColorPickerQuill";

const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
        <path
            className="ql-stroke"
            d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
        />
    </svg>
);

const CustomRedo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
        <path
            className="ql-stroke"
            d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
        />
    </svg>
);

function undoChange() {
    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}

const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large1", "extra-large","8px", "10px", "12px", "14px", "16px", "18px", "20px", "24px", "28px", "32px","36px", "40px", "48px", "56px", "64px", "72px", "80px", "88px", "96px", "104px", "112px", "120px", "128px"];
Quill.register(Size, true);

const fonts = [
    'lato',
    'abhaya-libre',
    'merriweather',
    'alegreya',
    'montserrat',
    'aleo',
    'muli',
    'arapey',
    'nunito',
    'asap-condensed',
    'assistant',
    'open sans',
    'barlow',
    'oswald',
    'bitter',
    'poppins',
    'brawler',
    'roboto',
    'caladea',
    'rokkitt',
    'carme',
    'rubik',
    'raleway',
    'helvetica',
    'quicksand',
    'pacifico',
    'abril-fatface',
    'dosis',
    'inconsolata',
    'roboto',
    'mirza',
    'arial'
];
const Font = Quill.import("formats/font");
Font.whitelist = fonts;
Quill.register(Font, true);

export const modules = {
    toolbar: {
        container: "#toolbar-container",
        handlers: {
            undo: undoChange,
            redo: redoChange
        }
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
    }
};

export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block"
];


export const QuillToolbar = (props) => (
    <div id="toolbar-container" className="w3-round-large" style={{border:'none'}}>
        <span className="ql-formats" style={{ marhinBottom: "10vh" }}>
            <div className="w3-row">
                <div className="w3-col l4">
                    <select className="ql-font w3-card w3-round-medium w3-hover-shadow" size='3' defaultValue="arial" style={{ width: "16vh",boxShadow: 'none',backgroundColor:'#cedce6'  }}>
                        <option value="inconsolata">Inconsolata</option>
                        <option value="roboto">Roboto</option>
                        <option value="mirza">Mirza</option>
                        <option value="arial">Arial</option>
                        <option value="lato">Lato</option>
                        <option value="merriweather">Merriweather</option>
                        <option value="alegreya">Alegreya</option>
                        <option value="montserrat">Montserrat</option>
                        <option value="aleo">Aleo</option>
                        <option value="muli">Muli</option>
                        <option value="arapey">Arapey</option>
                        <option value="nunito">Nunito</option>
                        <option value="assistant">Assistant</option>
                        <option value="open-sans">Open Sans</option>
                        <option value="barlow">Barlow</option>
                        <option value="oswald">Oswald</option>
                        <option value="bitter">Bitter</option>
                        <option value="poppins">Poppins</option>
                        <option value="brawler">Brawler</option>
                        <option value="roboto">Roboto</option>
                        <option value="caladea">Caladea</option>
                        <option value="rokkitt">Rokkitt</option>
                        <option value="carme">Carme</option>
                        <option value="rubik">Rubik</option>
                        <option value="raleway">Raleway</option>
                        <option value="helvetica">Helvetica</option>
                        <option value="quicksand">Quicksand</option>
                        <option value="pacifico">Pacifico</option>
                        <option value="dosis">Dosis</option>
                        <option value="abhaya-libre">Abhaya Libre</option>
                        <option value="abril-fatface">Abril Fatface</option>
                        <option value="asap-condensed">Asap Condensed</option>
                    </select>
                </div>
                <div className="w3-col l4">
                    <select className="ql-size  w3-card w3-round-medium w3-hover-shadow" size="4" defaultValue="16px" style={{ marginLeft:"4vh",width: "8vh",boxShadow: 'none',backgroundColor:'#cedce6',height: 'auto' }}>
                        <option value="8px">8px</option>
                        <option value="10px">10px</option>
                        <option value="12px">12px</option>
                        <option value="14px">14px</option>
                        <option value="16px">16px</option>
                        <option value="18px">18px</option>
                        <option value="20px">20px</option>
                        <option value="24px">24px</option>
                        <option value="28px">28px</option>
                        <option value="32px">32px</option>
                        <option value="36px">36px</option>
                        <option value="40px">40px</option>
                        <option value="48px">48px</option>
                        <option value="56px">56px</option>
                        <option value="64px">64px</option>
                        <option value="72px">72px</option>
                        <option value="80px">80px</option>
                        <option value="88px">88px</option>
                        <option value="96px">96px</option>
                        <option value="104px">104px</option>
                        <option value="112px">112px</option>
                        <option value="120px">120px</option>
                        <option value="128px">128px</option>
                    </select>
                </div>
                <div className="w3-col l4">
                    <select className="ql-header  w3-card w3-round-medium w3-hover-shadow" defaultValue="3" style={{ width: "15vh",boxShadow: 'none',backgroundColor:'#cedce6'  }}>
                        <option value="1">Heading</option>
                        <option value="2">Subheading</option>
                        <option value="3">Paragraph</option>
                    </select>
                </div>
            </div>
        </span>
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
            <select className="ql-color" />
            <select className="ql-background" />
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-script" value="super" />
            <button className="ql-script" value="sub" />
        </span>
        <span className="ql-formats">
            <select className="ql-align" />
            <button className="ql-blockquote" />
            <button className="ql-link" />
            <button className="ql-image" />
            <button className="ql-code-block" />
            <button className="ql-undo">
                <CustomUndo />
            </button>
            <button className="ql-redo">
                <CustomRedo />
            </button>
            <button>
                <ColorPickerQuill quillRef={props.quillRef} /> 
            </button>
        </span>
    </div>
);

export default QuillToolbar;