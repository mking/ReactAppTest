import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import StyledLink from './Common/StyledLink';
import { getCaseEntities } from '../actions/switzerlandActions';
import {
  caseLoadingSelector,
  caseEntitiesSelector,
} from '../selectors/switzerlandSelectors';

const debug = require('debug')('ReactAppTest:SwitzerlandCases');

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

const SwitzerlandCases = ({ caseLoading, caseEntities, getCaseEntities }) => {
  const onClick = async () => {
    debug('fetching switzerland cases');
    await getCaseEntities();
  };

  return (
    <Container>
      <p>
        <StyledLink to="/">Home</StyledLink>
      </p>
      <p>Switzerland</p>
      <p>
        <button type="button" onClick={onClick}>
          Get cases {caseLoading ? '(loading...)' : ''}
        </button>
      </p>
      <Table loadingFlag={caseLoading}>
        <tbody>
          {caseEntities.map((caseEntity) => (
            <tr key={caseEntity.Date}>
              <TableData>
                {caseEntity.Country}: {caseEntity.Cases}
              </TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  caseLoading: caseLoadingSelector,
  caseEntities: caseEntitiesSelector,
});

const mapDispatchToProps = {
  getCaseEntities,
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitzerlandCases);
