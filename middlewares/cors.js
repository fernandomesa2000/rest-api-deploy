import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:8080',
    'http://localhost:1234',
    'https://movies.com',
    'https://midu.dev'
]

export const corsMiddleware = ({ accepted_Origins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if (accepted_Origins.includes(origin)) {
            return callback(null, true)
        }

        if (!origin) {
            return callback(null, true)
        }

        return callback(new Error('Not allowed by CORS'))
    }
})