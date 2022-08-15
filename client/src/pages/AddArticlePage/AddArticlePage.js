import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import { addArticle } from '../../redux/actionCreators/article';

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
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    const file = e.target.file.files[0];
    const articleData = {
      file, previewText, title, tag, userId, HTML: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    };

    dispatch(addArticle(articleData, token));
  };

  return (
    <main className="add-article">
      <Container>
        <Title>Add article</Title>
        <form
          onSubmit={submitHandler}
          action="http://localhost:5050/api/article/upload"
          method="POST"
          encType="multipart/form-data"
        >
          <Input id="file" type="file" placeholder="Choose preview image of the article" />
          <Input
            type="text"
            placeholder="Enter preview text of the article"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
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
          <div className="add-article__words-count">
            Words:
            {editorState.getCurrentContent().getPlainText().toString().length}
          </div>
          <Button type="submit">Publish an article</Button>
        </form>
      </Container>
    </main>
  );
};

export default AddArticlePage;
