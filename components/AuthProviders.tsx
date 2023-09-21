"use client"

import { useEffect, useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Button from '@/components/Button';

type Provider = {
    id: string;
    name: string;
    type: string;
    signInUrl: string;
    callbackUrl: string;
    signInUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>

const AuthProviders = () => {
    const [providers, setProviders] = useState<Providers | null>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();

            console.log(res)

            setProviders(res);
        };

        fetchProviders();
    }, []);

    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: Provider, index: number) => (
                    <Button
                        key={index}
                        handleClick={() => signIn(provider?.id)}
                        title="Sign In"
                    />
                ))}
            </div>
        );
    }
};

export default AuthProviders;