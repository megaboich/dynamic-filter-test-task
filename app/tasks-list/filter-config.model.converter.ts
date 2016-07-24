import { FilterNode, FilterNodeType } from './filter-config.model'
import { FilterExpressionDTO } from '../api/tasks/filters-config.service'
import { isNotEmptyArray, isNullOrEmptyArray } from '../shared/utils'

export class FilterConfigModelConverter {
    static BuildFilterNode(filterDto: FilterExpressionDTO): FilterNode {
        let node = new FilterNode();
        switch (filterDto.expression) {
            case "AND":
                node.type = FilterNodeType.and;
                break;
            case "OR":
                node.type = FilterNodeType.or;
                break;
            case "EQUALS":
                node.type = FilterNodeType.equals;
                break;
            case "AskUser":
                node.type = FilterNodeType.ask;
                break;
            default:
                node.type = FilterNodeType.value;
                break;
        }

        switch (node.type) {
            case FilterNodeType.and:
            case FilterNodeType.or:
            case FilterNodeType.equals:
                //expect parameters here - go recursive
                if (!filterDto.parameters || filterDto.parameters.length < 2) {
                    throw `Wrong filters configuration: expected more than one parameter for node ${filterDto.expression}`;
                }
                node.parameters = filterDto.parameters.map(p => this.BuildFilterNode(p));
                break;
            default:
                // do not expect parameters here
                if (isNotEmptyArray(filterDto.parameters)) {
                    throw `Wrong filters configuration: not expected parameters for node ${filterDto.expression}`;
                }
                node.value = filterDto.expression;
                break;
        }
        return node;
    }
}

