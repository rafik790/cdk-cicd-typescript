#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCicdTypescriptStack } from '../lib/cdk-cicd-typescript-stack';

const app = new cdk.App();
new CdkCicdTypescriptStack(app, 'CdkCicdTypescriptStack');