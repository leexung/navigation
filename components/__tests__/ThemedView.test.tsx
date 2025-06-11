import { useThemeColor } from '@/hooks/useThemeColor';
import { render } from "@testing-library/react-native";
import React from 'react';
import { ThemedView } from '../ThemedView';

// Mock useThemeColor hook
jest.mock('@/hooks/useThemeColor', () => ({
  useThemeColor: jest.fn(),
}));


describe('ThemedView', () => {
  const mockUseThemeColor = useThemeColor as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with backgroundColor from useThemeColor', () => {
    mockUseThemeColor.mockReturnValue('red');
    const { getByTestId } = render(
      <ThemedView testID="themed-view" />
    );
    const view = getByTestId('themed-view');
    expect(view.props.style[0]).toMatchObject({ backgroundColor: 'red' });
  });

  it('passes style prop correctly', () => {
    mockUseThemeColor.mockReturnValue('blue');
    const style = { padding: 10 };
    const { getByTestId } = render(
      <ThemedView testID="themed-view" style={style} />
    );
    const view = getByTestId('themed-view');
    // style is an array: [ { backgroundColor }, style ]
    expect(view.props.style[1]).toMatchObject(style);
  });

  it('calls useThemeColor with correct arguments', () => {
    mockUseThemeColor.mockReturnValue('green');
    render(
      <ThemedView lightColor="#fff" darkColor="#000" />
    );
    expect(mockUseThemeColor).toHaveBeenCalledWith(
      { light: '#fff', dark: '#000' },
      'background'
    );
  });

  it('forwards other props to View', () => {
    mockUseThemeColor.mockReturnValue('yellow');
    const onLayout = jest.fn();
    const { getByTestId } = render(
      <ThemedView testID="themed-view" accessible onLayout={onLayout} />
    );
    const view = getByTestId('themed-view');
    expect(view.props.accessible).toBe(true);
    view.props.onLayout();
    expect(onLayout).toHaveBeenCalled();
  });
});