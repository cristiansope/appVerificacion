import React from 'react';

export const Revisions = () => {
    return (
        <section className="revisiones">
        {[...Array(9)].map((_, i) => (
            <div className="revision" key={i}>
            <div className="numRevision">
                <span>{i + 1}</span>
            </div>
            <input type="text" placeholder="Nombre" size="60" />
            <label className="custom-checkbox">
                <input type="checkbox" name="checkRevision" />
                <span className="checkmark"></span>
            </label>
            </div>
        ))}
        </section>
    );
}