import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  EditFilled,
  TranslationOutlined,
  TagOutlined,
  InboxOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import {
  Modal,
  Input,
  Icon,
  Progress,
  Checkbox,
  Popover,
  Upload,
  Select,
} from 'antd';
import TagSubject from '../../../components/quizz/create_quizz/TagSubject';
import { getListTagsAction } from '../../../redux/tag/action';
import {
  getOneTestAction,
  updateOneTestAction,
} from '../../../redux/test/actions';
import { Wrapper } from './styles';

const delayTime = 800;
const { Dragger } = Upload;
const { TextArea } = Input;
const { Option } = Select;
// const propsUploadImage = {
//   name: 'file',
//   multiple: true,
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };
export default function QuizInfo(props) {
  const [visibleModalNameSubject, setVisibleModalNameSubject] = useState(false);
  const [visibleModalOtherInfor, setVisibleModalOtherInfor] = useState(false);
  const [errorSubjectMessage, setErrorSubjectMessage] = useState('');
  const [chosenTag, setChosenTag] = useState([]);
  const [errorNameMessage, setErrorNameMessage] = useState('');
  const [nameQuiz, setNameQuiz] = useState('');
  const [loadingSuccess, setLoadingSuccess] = useState(false);
  const [quizStatus, setQuizStatus] = useState(false);
  const [quizDescription, setQuizDescription] = useState(false);
  const dispatch = useDispatch();

  const tagState = useSelector((state) => state.tag);
  const currentTest = useSelector((state) => state.test.currentTest);

  const testId = 1;

  useEffect(() => {
    dispatch(getListTagsAction(50, 0));
    //dispatch(getOneTestAction(props.id));
    dispatch(getOneTestAction(testId));
    setTimeout(() => {
      setLoadingSuccess(true);
      setNameQuiz(currentTest.name);
      currentTest.tags && setChosenTag(currentTest.tags.map((e) => e.id));
      setQuizStatus(currentTest.isPublic);
      setQuizDescription(currentTest.description);
    }, delayTime);
  }, [dispatch, loadingSuccess]);

  // console.log(currentTest);

  const handleChooseTag = (id) => {
    setErrorSubjectMessage('');
    let newChosenTag = [...chosenTag];
    if (newChosenTag.indexOf(id) === -1) {
      if (newChosenTag.length === 3) {
        setErrorSubjectMessage('maximum 3 subjects');
        newChosenTag = [newChosenTag[1], newChosenTag[2], id];
      } else {
        setErrorSubjectMessage('');
        newChosenTag.push(id);
      }
    } else {
      setErrorSubjectMessage('');
      const index = newChosenTag.indexOf(id);
      newChosenTag = [
        ...newChosenTag.slice(0, index),
        ...newChosenTag.slice(index + 1),
      ];
    }
    setChosenTag(newChosenTag);
  };

  const handleCancelModalNameSubject = () => {
    setVisibleModalNameSubject(false);
    if (errorNameMessage !== '') {
      setErrorNameMessage('');
    }
    if (errorSubjectMessage !== '') {
      setErrorSubjectMessage('');
    }
    setNameQuiz(currentTest.name);
    setChosenTag(currentTest.tags.map((e) => e.id));
  };

  const handleOkModalNameSubject = () => {
    if (chosenTag.length === 0) {
      setErrorSubjectMessage('Please select one or more subjects');
    }
    if (nameQuiz.length === 0) {
      setErrorNameMessage('Please enter a quiz name');
    }
    if (chosenTag.length > 0 && nameQuiz.length > 0) {
      dispatch(
        updateOneTestAction(testId, {
          userId: 1,
          name: nameQuiz,
          tagIds: chosenTag,
        })
      );
      dispatch(getOneTestAction(testId));
      setVisibleModalNameSubject(false);
      if (errorNameMessage !== '') {
        setErrorNameMessage('');
      }
      if (errorSubjectMessage !== '') {
        setErrorSubjectMessage('');
      }
    }
  };

  const handleCancelModalOtherInfor = () => {
    setVisibleModalOtherInfor(false);
  };

  const handleOkModalOtherInfor = () => {
    dispatch(
      updateOneTestAction(testId, {
        userId: 1,
        description: quizDescription,
        isDraft: !quizStatus,
      })
    );
    dispatch(getOneTestAction(testId));
    setVisibleModalOtherInfor(false);
  };

  const handleChangeNameQuiz = (e) => {
    setNameQuiz(e.target.value);
    if (e.target.value.length > 0) setErrorNameMessage('');
  };

  const handleChangeStatusQuiz = async (status) => {
    await dispatch(
      updateOneTestAction(testId, {
        userId: 1,
        isDraft: !status,
      })
    );
    await dispatch(getOneTestAction(testId));
    setQuizStatus(status);
  };

  let percent = 25;

  if (currentTest.description) percent += 25;

  return (
    <Wrapper>
      <Modal
        visible={visibleModalOtherInfor}
        onOk={handleOkModalOtherInfor}
        okText={<div>Save</div>}
        onCancel={handleCancelModalOtherInfor}
        maskClosable={false}
        closable={false}
        className="modal-edit-more-infor-quizz"
      >
        <div className="main-title">Quiz details</div>
        <div className="item-quiz-detail">
          <span className="item-title">1. Add a title image</span>
          {/* <Dragger {...propsUploadImage}> */}
          <Dragger style={{ marginTop: '10px' }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{ color: '#000' }} />
            </p>
            <p className="ant-upload-hint">
              Drags and drop or click here to upload
            </p>
          </Dragger>
        </div>
        <div className="item-quiz-detail">
          <span className="item-title">2. Description</span>
          <TextArea
            style={{ marginTop: '10px' }}
            value={quizDescription}
            onChange={(e) => setQuizDescription(e.target.value)}
          />
        </div>
        <div className="item-quiz-detail">
          <span className="item-title">3. Who can see this quiz ?</span>
          <Select
            value={quizStatus ? 'public' : 'private'}
            style={{ width: '100%', marginTop: '10px' }}
            className="test-details-select"
            onChange={(e) => setQuizStatus(e === 'public')}
          >
            <Option value="public">
              <EyeOutlined className="icon" style={{ marginRight: '10px' }} />
              Public, visible to everyone
            </Option>
            <Option value="private">
              <EyeInvisibleOutlined
                className="icon"
                style={{ marginRight: '10px' }}
              />
              Private, visible to you
            </Option>
          </Select>
        </div>
      </Modal>
      <Modal
        visible={visibleModalNameSubject}
        onOk={handleOkModalNameSubject}
        okText={<div>Save</div>}
        onCancel={handleCancelModalNameSubject}
        maskClosable={false}
        closable={false}
        className="modal-create-quizz"
      >
        <div className="edit-quiz-info-modal-body">
          <h2>Create a quiz</h2>
          <div className="title">
            1. Name this quiz
            {errorNameMessage.length > 0 && (
              <div className="error">({errorNameMessage})</div>
            )}
          </div>
          <Input value={nameQuiz} onChange={handleChangeNameQuiz} />
          <br />
          <br />
          <div className="title">
            2. Choose relevant subjects
            {errorSubjectMessage.length > 0 && (
              <div className="error">({errorSubjectMessage})</div>
            )}
          </div>
          {tagState.tags.length > 0 &&
            tagState.tags.map((e) => (
              <TagSubject
                nameSubject={e.name}
                key={e.id}
                onClick={() => handleChooseTag(e.id)}
                enabled={
                  chosenTag &&
                  chosenTag.length > 0 &&
                  chosenTag.indexOf(e.id) >= 0
                }
              />
            ))}
        </div>
      </Modal>
      <div
        className="quiz-info-image-wrapper"
        onClick={() => setVisibleModalOtherInfor(true)}
      >
        <img
          src="https://picsum.photos/200/300"
          alt="quizz-img"
          className="quiz-info-img"
        />
        <span className="quiz-info-img-text">+ Add quiz image</span>
      </div>
      <div
        className="quiz-info-name-wrapper"
        onClick={() => setVisibleModalNameSubject(true)}
      >
        <span className="quiz-info-name">{currentTest.name}</span>
        <EditFilled style={{ color: '#00C985' }} />
      </div>
      <div className="quiz-info-brief-wrapper">
        <Popover
          content={
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 'bold' }}>
                Public:{' '}
                <span style={{ fontWeight: 'normal' }}>
                  Visible to everyone
                </span>
              </span>
              <span style={{ fontWeight: 'bold' }}>
                Private:{' '}
                <span style={{ fontWeight: 'normal' }}>Visible to you</span>
              </span>
            </div>
          }
          className="item"
        >
          {currentTest.isPublic ? (
            <div onClick={() => handleChangeStatusQuiz(false)}>
              <EyeOutlined type="eye" className="icon" />
              Public
            </div>
          ) : (
            <div onClick={() => handleChangeStatusQuiz(true)}>
              <EyeInvisibleOutlined type="eye" className="icon" />
              Private
            </div>
          )}
        </Popover>
        <div className="item">
          <TranslationOutlined className="icon" />
          English
        </div>
        <Popover
          content={<div>Default time for all questions</div>}
          className="item"
        >
          <Icon type="clock-circle" className="icon" />
          30 secs
        </Popover>
      </div>
      <div className="quiz-info-detail-wrapper">
        {currentTest.tags &&
          currentTest.tags.length > 0 &&
          currentTest.tags.map((e) => (
            <div
              className="item"
              key={e.id}
              onClick={() => {
                setVisibleModalNameSubject(true);
              }}
            >
              <TagOutlined className="icon" />
              {e.name}
            </div>
          ))}
        {currentTest.description && currentTest.description === '' ? (
          <div className="item" onClick={() => setVisibleModalOtherInfor(true)}>
            <Icon type="profile" className="icon" />
            Add a description
          </div>
        ) : (
          <div
            className="item item-description"
            onClick={() => setVisibleModalOtherInfor(true)}
          >
            <Icon type="profile" className="icon icon-description" />
            <div className="description">{currentTest.description}</div>
          </div>
        )}
      </div>
      <div className="quiz-info-quality-score-wrapper">
        <span className="title">Quiz quality score</span>
        <Progress
          percent={percent}
          strokeColor="#F5A623"
          className="quiz-quality-score-progress"
        />
        <div className="item-wrapper">
          <Checkbox checked className="checkbox-item">
            Pick a relevant quiz name
          </Checkbox>
          <Checkbox className="checkbox-item" checked={false}>
            Add a quiz image
          </Checkbox>
          {currentTest.description ? (
            <Checkbox className="checkbox-item" checked>
              Add a description
            </Checkbox>
          ) : (
            <Checkbox className="checkbox-item" checked={false}>
              Add a description
            </Checkbox>
          )}

          <Checkbox className="checkbox-item">
            Add at least 4 questions
          </Checkbox>
        </div>
      </div>
    </Wrapper>
  );
}
