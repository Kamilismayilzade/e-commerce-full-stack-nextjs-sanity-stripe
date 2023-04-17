import  sanityClient  from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({

    projectId: 'ctcfna39',
    dataset: 'production',
    apiVersion: '2023-04-02',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,

});

const builder = imageUrlBuilder(client);

export const urlForImage = (source) => builder.image(source);
