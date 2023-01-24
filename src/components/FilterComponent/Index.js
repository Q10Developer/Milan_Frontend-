import React from 'react';
import { Button } from 'react-bootstrap';

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <Button type="button" onClick={""}>
      X
    </Button>
  </>
);


export default FilterComponent;