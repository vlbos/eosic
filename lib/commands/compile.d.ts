import { flags } from "@oclif/command";
import BaseCommand from "./internal/base-command";
export default class Compile extends BaseCommand {
    static args: {
        required: boolean;
        hidden: boolean;
        name: string;
    }[];
    static flags: {
        help: import("../../node_modules/@oclif/parser/lib/flags").IBooleanFlag<void>;
        quiet: import("../../node_modules/@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        force: import("../../node_modules/@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        verbose: import("../../node_modules/@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        cwd: flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<void>;
}
