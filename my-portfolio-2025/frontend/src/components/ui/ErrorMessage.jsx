import PropTypes from 'prop-types';

export default function ErrorMessage({ message, onRetry }) {
    return (
        <div style={styles.container}>
            <p style={styles.text}>⚠️ {message || 'An error occurred while loading data.'}</p>
            {onRetry && (
                <button onClick={onRetry} style={styles.button}>
                    Retry
                </button>
            )}
        </div>
    );
}

ErrorMessage.propTypes = {
    message: PropTypes.string,
    onRetry: PropTypes.func
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        margin: '1rem auto',
        border: '1px solid var(--error-color, #e65252b1)',
        backgroundColor: 'rgba(230, 82, 82, 0.1)',
        borderRadius: '8px',
        maxWidth: '400px',
        textAlign: 'center',
    },
    text: {
        color: 'var(--text-color)',
        marginBottom: '1rem',
        fontSize: '1rem',
    },
    button: {
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--accent-color, orange)',
        border: 'none',
        borderRadius: '4px',
        color: '#000',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.2s',
    }
};
