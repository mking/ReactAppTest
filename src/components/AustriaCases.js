import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import StyledLink from './Common/StyledLink';
import { getRecordEntities, setFoo } from '../actions/austriaActions';
import {
  recordLoadingSelector,
  recordEntitiesSelector,
  fooSelector,
} from '../selectors/austriaSelectors';

const debug = require('debug')('ReactAppTest:AustriaCases');

const Container = styled.div`
  background-color: #282c34;
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

const AustriaCases = ({
  recordLoading,
  recordEntities,
  foo,
  getRecordEntities,
  setFoo,
}) => {
  const onClick = async () => {
    debug('fetching austria records');
    await getRecordEntities();
  };

  const onFoo = async () => {
    debug('doing foo');
    await setFoo(foo + 1);
  };

  return (
    <Container>
      <p>
        <StyledLink to="/">Home</StyledLink>
      </p>
      <p>Austria</p>
      <p>
        <button type="button" onClick={onClick}>
          Get Austria records {recordLoading ? '(loading...)' : ''}
        </button>
      </p>
      <p>
        <button type="button" onClick={onFoo}>
          Foo
        </button>
      </p>
      <p>foo: {foo}</p>
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
});

const mapDispatchToProps = {
  getRecordEntities,
  setFoo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AustriaCases);
