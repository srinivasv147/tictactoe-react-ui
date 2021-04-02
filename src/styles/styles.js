const useStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(16),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'solid black 2px',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
    },
    avatar: {
        marginTop: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        marginBottom: theme.spacing(1),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    google: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: 'auto',
        marginRight: 'auto',
        float: 'none',
        position: 'static',
        display: 'block',
        width: 'max-content',
    },
});

export default useStyles;