export default function LoadingSpinner() {
    return (
        <div style={styles.container}>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            <div style={styles.spinner}></div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        width: '100%',
    },
    spinner: {
        width: '40px',
        height: '40px',
        border: '4px solid rgba(0, 0, 0, 0.1)',
        borderTop: '4px solid var(--accent-color, orange)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
    }
};
