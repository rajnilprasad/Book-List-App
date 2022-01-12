import React from 'react';

const TableField = ({ fieldName, settingsField, removeBooks, editBook }) => {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i onClick={editBook} className="far fa-edit"></i>
          <i onClick={removeBooks} className="fas fa-trash-alt"></i>
        </>
      )}
    </div>
  );
};

export default TableField;
