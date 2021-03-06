import { Model } from '../client/interfaces/Model';
import { sort } from './sort';

export function getModelNames(models: Model[]): string[] {
    return models
        .map((model) => model.name)
        .filter((modelName) => modelName !== 'any')
        .sort(sort);
}
