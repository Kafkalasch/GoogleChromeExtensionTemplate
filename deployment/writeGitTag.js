const versioning = require("./utilities/versioning");
const settings = require("./settings");

const versionFile = settings.pathForGitTagFile;
versioning.writeGitTagAsTextFile(versionFile);
