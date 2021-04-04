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
    gamecontainer: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //border: 'solid black 2px',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(5),
    },
    board: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //border: 'solid black 2px',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(1),
        width: '100%',
        maxWidth: '400px',
        maxHeight: '400px',
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
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    scorecard: {
        minWidth: '80%',
        maxWidth: '80%',
        marginTop: theme.spacing(2),
    },
    players: {
        textAlign: 'center'
    },
    row: {
        width: '100%',
        textAlign: 'center',
        minHeight: '60px',
    },
    block: {
        width: '25%',
        minWidth: '60px',
        minHeight: '60px',
        height: '0',
        paddingBottom: '20%',
        margin: '2.5%',
        display: 'inline-flex',
        border: 'solid black 2px',
        borderRadius: theme.spacing(1),
    },
    xo: {
        textAlign: 'center',
        margin: 'auto',
        paddingTop: '20%',
        fontSize: '150%'
    },
    challenger: {
        marginTop: theme.spacing(2),
    },
});

export default useStyles;