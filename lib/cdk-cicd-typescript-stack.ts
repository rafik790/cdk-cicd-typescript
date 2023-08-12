import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';


export class CdkCicdTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new CodePipeline(this, 'AwesomePipeline', {
      pipelineName: 'AwesomePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('rafik790/cdk-cicd-typescript', 'master'),
        commands: [
          'npm ci',
          'npx cdk synth'
        ],
        primaryOutputDirectory: 'cdk.out'
      })
    })
  }
}
