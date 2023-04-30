export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://github.com/qulpynaimm/NFT-collection/tree/master/my-app/public/IT-2004";
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      name: "it2004 #" + tokenId,
      description: "it2004 is a collection for diploma work that was developed for students of it2004 group.",
      image: image_url + tokenId + ".svg",
    });
  }