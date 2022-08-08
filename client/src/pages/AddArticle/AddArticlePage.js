import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import { Button } from '../../components/Button/Button';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';
import './AddArticlePage.sass';

const toolbarOptions = {
  options: ['inline', 'list', 'image', 'textAlign'],
  inline: {
    inDropdown: false,
    bold: { icon: '/images/editor/B.svg' },
  },
  list: {
    inDropdown: false,
  },
  image: {
    defaultSize: {
      width: '640px',
      height: '400px',
    },
  },
  textAlign: { inDropdown: false, className: 'editor-text-align-area' },
};

const AddArticlePage = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');

  const clickHandler = () => {
    console.log({
      title,
      tag,
      html: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  return (
    <main className="add-article">
      <div className="container">
        <div className="add-article__title">Add article</div>
        <div>
          <fieldset className="add-article__fieldset">
            <input
              className="add-article__input"
              type="text"
              placeholder="Enter a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="add-article__input"
              type="text"
              placeholder="Enter the category name..."
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              toolbarClassName="editor-toolbar"
              editorClassName="editor-input"
              toolbar={toolbarOptions}
            />
          </fieldset>
          <div className="add-article__words-count">
            Words:
            {editorState.getCurrentContent().getPlainText().toString().length}
          </div>
        </div>
        <Button theme="primary" onClick={() => clickHandler()}>Publish an article</Button>
      </div>
    </main>
  );
};

export default AddArticlePage;
