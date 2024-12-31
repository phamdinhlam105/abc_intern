import { lazy, Suspense } from 'react';
import { Editor } from 'ckeditor5';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { ComponentBaseProps } from './component.interface';

const CKEditor = lazy(() => import('./ck-editor'));

type FormFieldCKEditorFullProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  formLabel?: string;
  fieldName?: Path<T>;
  editorRef: React.MutableRefObject<Editor | null>;
  minLength?: number;
  maxLength?: number;
} & ComponentBaseProps;

export default function FormFieldCKEditorFull<T extends FieldValues>({
  form,
  formLabel,
  fieldName = 'body' as Path<T>,
  editorRef,
  minLength = 1,
  maxLength = Infinity,
}: FormFieldCKEditorFullProps<T>) {

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormLabel>{formLabel ?? 'form_field_content'}</FormLabel>
          <FormControl>
            <Suspense
              fallback={
                <div>
                  <span>Loading editor...</span>
                </div>
              }
            >
              <CKEditor
                {...field}
                minHeight={308}
                value={field.value}
                onChange={field.onChange}
                onFocus={(_event, editor) => (editorRef.current = editor)}
              />
            </Suspense>
          </FormControl>
          {error?.message && <FormMessage />}
        </FormItem>
      )}
    />
  );
}
