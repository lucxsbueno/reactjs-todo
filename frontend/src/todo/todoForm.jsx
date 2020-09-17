import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {

    const handleKey = (e) => {
        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd
        } else if (e.key === "Escape") {
            props.handleClear();
        }
    }

    return (
        <div role="form" className="todoForm">

            <Grid cols="12 9 10">
                <input type="text" id="description" className="form-control"
                    required
                    placeholder="Adicione uma tarefa"
                    onKeyUp={handleKey}
                    onChange={props.handleChange}
                    value={props.description} />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style="default" icon="close" onClick={props.handleClear} />
                <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                <IconButton style="info" icon="search" onClick={props.handleSearch} />
            </Grid>

        </div>
    )
};