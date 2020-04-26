import React from 'react';
import { Editor } from 'draft-js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import StyledLink from './Common/StyledLink';
import {
  getRecordEntities,
  setFoo,
  setComment,
} from '../actions/austriaActions';
import {
  recordLoadingSelector,
  recordEntitiesSelector,
  fooSelector,
  commentSelector,
} from '../selectors/austriaSelectors';

const debug = require('debug')('ReactAppTest:AustriaCases');

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #ffffff;
`;

const Table = styled.table`
  opacity: ${({ loadingFlag }) => (loadingFlag ? 0.5 : 1)};
`;

const TableData = styled.td`
  font-size: 16px;
`;

const EditorContainer = styled.div`
  border: 1px solid #ffffff;
  padding: 20px;
  width: 400px;
  min-height: 6em;
`;

const AustriaCases = ({
  recordLoading,
  recordEntities,
  foo,
  comment,
  getRecordEntities,
  setFoo,
  setComment,
}) => {
  const onClick = async () => {
    debug('fetching austria records');
    await getRecordEntities();
  };

  const onFoo = async () => {
    debug('doing foo');
    await setFoo(foo + 1);
  };

  const onCommentChange = (editorState) => {
    setComment(editorState);
  };

  return (
    <Container>
      <p>
        <StyledLink to="/">Home</StyledLink>
      </p>
      <p>Austria</p>
      <hr />
      <p>
        <button type="button" onClick={onFoo}>
          Foo
        </button>
      </p>
      <p>foo: {foo}</p>
      <hr />
      <p>Add note about Austria</p>
      <EditorContainer>
        <Editor editorState={comment} onChange={onCommentChange} />
      </EditorContainer>
      <hr />
      <p>
        <button type="button" onClick={onClick}>
          Get Austria records {recordLoading ? '(loading...)' : ''}
        </button>
      </p>
      <Table loadingFlag={recordLoading}>
        <tbody>
          {recordEntities.map((recordEntity) => (
            <tr key={recordEntity.Date}>
              <TableData>
                {recordEntity.Country}: {recordEntity.Cases}
              </TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  recordLoading: recordLoadingSelector,
  recordEntities: recordEntitiesSelector,
  foo: fooSelector,
  comment: commentSelector,
});

const mapDispatchToProps = {
  getRecordEntities,
  setFoo,
  setComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(AustriaCases);
