import {GraphQLClient} from 'graphql-request';
import { getUserQuery } from '@/graphql';

const makeGraphQLRequest = async (query: string, variables = {}) => {

    const isProduction = process.env.NODE_ENV === 'production';

    const apiUrl = isProduction
                   ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ''
                   : 'http://193.161.14.82:4000/graphql';

    const apiKey = isProduction
                   ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ''
                   : 'letmein';

    const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

    const client = new GraphQLClient(apiUrl);

    try {

        return await client.request(query, variables);

    } catch (error: any) {
        throw error;
    }
}

export const getUser = (email: string) => {
    return makeGraphQLRequest(getUserQuery, { email })
}

