import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const Filter: React.FC<{
  value: string;
  values: string[];
  onChange: Function;
}> = ({ value, values, onChange }) => (
  <FormControl fullWidth={true}>
    <InputLabel htmlFor="filter">Filter</InputLabel>
    <Select
      value={value}
      onChange={e => onChange(e.target.value)}
      variant="filled"
      inputProps={{
        name: 'filter',
        id: 'filter',
        fullWidth: true,
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {values.map((emotion, index) => (
        <MenuItem value={emotion} key={`filter-item-${index}`}>{emotion}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Filter;
