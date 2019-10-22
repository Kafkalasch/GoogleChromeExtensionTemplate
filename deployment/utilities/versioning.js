const exec = require("child_process").exec;
const fs = require("fs");

const writeGitTagAsTextFile = filename => {
    return exec("git describe --tags --always --dirty", function(error, stdout, stderr) {
        if (error) {
            console.error(error, stderr);
            console.log("An error occurred.");
        } else {
            var versionText = stdout.trim();
            fs.writeFileSync(filename, versionText);
        }
    });
};

module.exports = {
    writeGitTagAsTextFile: writeGitTagAsTextFile
};
