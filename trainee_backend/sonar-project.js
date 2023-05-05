const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
        serverUrl : 'http://docker.pipalia.tech:9000',
        
        options: {
            'sonar.projectDescription': 'This is a TODO list application',

            'sonar.projectName': 'Node Project',
            'sonar.projectKey' : 'sonarqube-token',
            'sonar.login': 'sqp_26a38155fdc317d30877211d195606e99065c9b4',
            'sonar.projectVersion': '1.0',
            'sonar.language' :'js',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.sources' : '.'            
           
        },

},() => {});