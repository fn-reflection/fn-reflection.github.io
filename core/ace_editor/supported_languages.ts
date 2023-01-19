// if add some language, import its code styles on components/ace_editor.tsx
const SUPPORTED_LANGUAGES = ['java', 'python', 'ruby'] as const;

type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

const PLACEHOLDER_JAVA = `\
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine();
        System.out.println("hello");
    }
}`;
const PLACEHOLDER_PYTHON = `\
# coding: utf-8
input_line = raw_input()
print "XXXXXX"
`;
const PLACEHOLDER_RUBY = `\
input_line = gets
puts "XXXXXX"
`;
const PLACEHOLDERS: { [key in SupportedLanguage]: string } = {
  java: PLACEHOLDER_JAVA,
  python: PLACEHOLDER_PYTHON,
  ruby: PLACEHOLDER_RUBY,
};
const OFFICIAL_NAMES: { [key in SupportedLanguage]: string } = {
  java: 'Java',
  python: 'Python',
  ruby: 'Ruby',
};

export { SUPPORTED_LANGUAGES, PLACEHOLDERS, OFFICIAL_NAMES };
export type { SupportedLanguage };