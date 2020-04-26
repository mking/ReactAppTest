import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import StyledLink from './Common/StyledLink';
import { getRecordEntities } from '../actions/austriaActions';
import {
  recordLoadingSelector,
  recordEntitiesSelector,
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

const AustriaCases = ({ recordLoading, recordEntities, getRecordEntities }) => {
  const onClick = async () => {
    debug('fetching austria records');
    await getRecordEntities();
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
});

const mapDispatchToProps = {
  getRecordEntities,
};

export default connect(mapStateToProps, mapDispatchToProps)(AustriaCases);
