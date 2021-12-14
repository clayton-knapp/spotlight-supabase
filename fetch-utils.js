const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwOTI4OCwiZXhwIjoxOTU1MDg1Mjg4fQ.A7SPYPoDNta6hhH8PI0rtJ0joSA4Odghy1ojtQ3nJmg';

const SUPABASE_URL = 'https://nkxbvzzqodskvzrqttrm.supabase.co';

//sets up the client
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchMicrophones(){
    //declares the object to be returned and uses await keyword to call the client, telling it to access table: microphones
    const request = await client
        .from('microphones')
        .select();
    // return the object's data object - which is your array of objects of your table
    return request.data;
}

export async function fetchPreamps(){
    const request = await client
        .from('preamps')
        .select();
    // console.log(request.data);

    return request.data;
}

export async function fetchCompressors(){
    const request = await client
        .from('compressors')
        .select();
    // console.log(request.data);

    return request.data;
}

export async function fetchOwners(){
    const request = await client
        .from('studio_owners')
        .select();
    console.log(request.data);

    return request.data;;
}