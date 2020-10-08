import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  tomorrow as textThemeLight,
  tomorrowNight as textThemeDark,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import {
//   base16AteliersulphurpoolLight as textThemeLight,
//   cb as textThemeDark,
// } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Spin } from 'antd';
import { Controlled as CodeMirror } from 'react-codemirror2';
import classNames from 'classnames';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neo.css';
import 'codemirror/theme/mbo.css';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/go/go';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/nginx/nginx';
import 'codemirror/mode/php/php';
import 'codemirror/mode/python/python';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/htmlembedded/htmlembedded';

const langMaps = {
  javascript: {
    editor: 'javascript',
    detail: 'javascript',
  },
  css: {
    editor: 'css',
    detail: 'css',
  },
  go: {
    editor: 'go',
    detail: 'go',
  },
  markdown: {
    editor: 'markdown',
    detail: 'markdown',
  },
  jsx: {
    editor: 'jsx',
    detail: 'typescript',
  },
  java: {
    editor: 'text/x-java',
    detail: 'java',
  },
  nginx: {
    editor: 'nginx',
    detail: 'nginx',
  },
  php: {
    editor: 'php',
    detail: 'php',
  },
  python: {
    editor: 'python',
    detail: 'python',
  },
  shell: {
    editor: 'shell',
    detail: 'shell',
  },
  sql: {
    editor: 'sql',
    detail: 'sql',
  },
  xml: {
    editor: 'xml',
    detail: 'xml',
  },
  html: {
    editor: 'htmlembedded',
    detail: 'htmlbars',
  },
};

export interface ICodeProps {
  prefixCls?: string;
  className?: string;
  id?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  loading?: boolean;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  theme?: string;
  language: string;
  editable?: boolean;
  showLineNumber?: boolean;
}

function Code(props: ICodeProps) {
  const prefixCls = `${props.prefixCls || 'dantd'}-code`;
  const {
    editable = false,
    className,
    style,
    value,
    defaultValue,
    onChange,
    theme = 'light', // dark
    loading = false,
    width,
    height,
    language,
    showLineNumber = true,
  } = props;
  const codeClassName = classNames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-editor-wrapper`]: editable,
    className,
  });

  let codeStyle = {
    ...style,
  };

  if (width) {
    codeStyle = {
      ...codeStyle,
      width,
    };
  }
  if (height) {
    codeStyle = {
      ...codeStyle,
      height,
    };
  }

  const [codeVal, setCodeVal] = useState<string>(defaultValue || '');

  // useEffect(() => {
  //   // 初始化value
  //   if (!codeVal && value) {
  //     setCodeVal(value);
  //   }
  // }, [value]);

  const renderCodeText = () => {
    const optionTheme = theme === 'light' ? textThemeLight : textThemeDark;
    let customStyle = {
      borderRadius: 0,
      ...codeStyle,
    } as any;

    if (theme === 'light') {
      customStyle = {
        ...customStyle,
        background: 'rgb(245, 247, 255)',
      };
    }

    const detailCls = classNames({
      [`${prefixCls}-text`]: true,
      [`${prefixCls}-text-light`]: theme === 'light',
      [`${prefixCls}-text-dark`]: theme === 'dark',
    });

    const lang = langMaps[language] ? langMaps[language].detail : '';
    return (
      <div className={detailCls}>
        <SyntaxHighlighter
          showLineNumbers={showLineNumber}
          lineNumberStyle={{ color: '#ddd' }}
          language={lang}
          style={optionTheme}
          customStyle={customStyle}
        >
          {value || codeVal}
        </SyntaxHighlighter>
      </div>
    );
  };

  const renderCodeEditor = () => {
    const editorCls = classNames({
      [`${prefixCls}-editor`]: true,
      [`${prefixCls}-editor-light`]: theme === 'light',
      [`${prefixCls}-editor-dark`]: theme === 'dark',
    });

    const optionTheme = theme === 'light' ? 'neo' : 'mbo';

    const lang = langMaps[language] ? langMaps[language].editor : '';
    return (
      <CodeMirror
        className={editorCls}
        value={value || codeVal}
        options={{
          mode: lang,
          theme: optionTheme,
          lineNumbers: showLineNumber,
        }}
        onBeforeChange={(editor, data, changeValue) => {
          if (onChange) {
            onChange(changeValue);
          } else {
            setCodeVal(changeValue);
          }
        }}
        // onChange={(editor, data, changeValue) => {
        //   if (onChange) {
        //     onChange(changeValue);
        //   }
        // }}
      />
    );
  };

  return (
    <Spin spinning={loading}>
      <div data-testid="code-wrapper" className={codeClassName} style={codeStyle}>
        {editable ? renderCodeEditor() : renderCodeText()}
      </div>
    </Spin>
  );
}
export default Code;
