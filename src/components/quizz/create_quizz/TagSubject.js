import React from 'react';
import { TagSubjectWrapperDisabled, TagSubjectWrapperEnabled } from './styles';

export default function TagSubject(props) {
  return props.enabled ? (
    <TagSubjectWrapperEnabled onClick={props.onClick}>
      {props.nameSubject}
    </TagSubjectWrapperEnabled>
  ) : (
    <TagSubjectWrapperDisabled onClick={props.onClick}>
      {props.nameSubject}
    </TagSubjectWrapperDisabled>
  );
}
