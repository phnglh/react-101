import {Button} from '../../../src/components/ui/button'
import { describe, it, expect, vi } from 'vitest';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

async function renderToContainer(ui: React.ReactElement) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
   flushSync(() => {
    root.render(ui);
  });

  return container;
}
describe('Button (no external libs)', () => {
  it('renders with children', async() => {
    const container = await renderToContainer(<Button>Click me</Button>);
    expect(container.innerHTML).toContain('Click me');
  });

  it('applies correct variant class',async () => {
    const container = await renderToContainer(<Button variant="outline">Test</Button>);
    const button = container.querySelector('button')!;
    expect(button.className).toContain('border');
  });

  it('shows loader when isPending = true', async () => {
    const container = await renderToContainer(<Button isPending>Loading</Button>);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('disables button when isPending',async () => {
    const container =  await renderToContainer(<Button isPending>Loading</Button>);
    const button = container.querySelector('button')!;
    expect(button.disabled).toBe(true);
  });

  it('calls onClick when clicked',async () => {
    const onClick = vi.fn();
    const container = await renderToContainer(<Button onClick={onClick}>Click</Button>);
    const button = container.querySelector('button')!;
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
