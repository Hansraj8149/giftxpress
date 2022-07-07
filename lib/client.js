import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'pgy60yt0',
    dataset: 'production',
    apiVersion: '2022-06-25',
    useCdn: true,
    token: 'sk9NEK5f9sDnw9sVLEP3b5ThZrI4L1JXeEn3wDFWS8sL2jAgy2jH9WT06aZBwOq8URQKgEv1xpn0iPcE9gyPwpiB82GIqFXOxNhQfCagDucth3C1WO117AZBmbsqDmAVEtjBAHIeoO2CWxYTsLS0aZvFNPXEWYbnZgztyxm4HHdesPAZ66Bx'
})
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);