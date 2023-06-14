'use server'

import executeQuery from "@/lib/db"

export default async function onSubmit(active) {
    if (active === 1) {
        await executeQuery({
            query: 'UPDATE data SET led = 0 WHERE id = 1',
            values: []
        })
    } else {
        await executeQuery({
            query: 'UPDATE data SET led = 1 WHERE id = 1',
            values: []
        })
    }
}