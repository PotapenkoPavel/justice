import React, { createRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';

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
  const [previewText, setPreviewText] = useState('');
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.user._id);
  const ref = createRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const file = e.target.file.files[0];

    const data = new FormData();
    data.append('previewImage', file);
    data.append('description', previewText);
    data.append('title', title);
    data.append('tag', tag);
    data.append('HTML', draftToHtml(convertToRaw(editorState.getCurrentContent())));
    data.append('userId', userId);

    axios.post('http://localhost:5050/api/article/', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  return (
    <main className="add-article">
      <div className="container">
        <div className="add-article__title">Add article</div>
        <div>
          <form
            onSubmit={submitHandler}
            action="http://localhost:5050/api/article/upload"
            method="POST"
            encType="multipart/form-data"
          >
            <fieldset className="add-article__fieldset">

              <div className="add-article__input-file">
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/png, image/jpeg"
                  hidden
                  onChange={(e) => ref.current.textContent = e.target.files[0].name}
                />

                <label className="add-article__input-file-label" htmlFor="file">Browse</label>

                <span
                  className="add-article__input-file-span"
                  id="file-chosen"
                  ref={ref}
                >
                  Choose preview image of the article
                </span>
              </div>

              <input
                className="add-article__input"
                type="text"
                placeholder="Enter preview text of the article"
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
              />

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
            <Button type="submit" theme="primary">Publish an article</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddArticlePage;
