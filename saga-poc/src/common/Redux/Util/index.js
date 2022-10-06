const trasformBlobToJson = async (blob) => new Response(blob).text();

export default trasformBlobToJson;
