import React from 'react';

const Button = ({incrementCount, children, alert}) => <button type="button" className={`btn btn-${alert}`} onClick={incrementCount}>{children}</button>

const Icon = ({name}) => <i className="material-icons">{name}</i>

export {Button, Icon}